import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useNavigate, useParams } from "react-router-dom";

import { tix, tw, withProps } from "@src/libs/tix";

/**
 * Components
 */
import { Card, CardProduct, Spinner, Head, Skeleton } from "@src/components";

/**
 * Store
 */

// slices
import * as orders from "@src/model/slices/orders";
import * as products from "@src/model/slices/products";
import { useSelector, useDispatch } from "@src/model/store";
import { required } from "@src/libs/types";
import { debounce } from "@src/libs/utils";

export const MenuCategoryProducts = withProps<{
  navigateLink: string;
  categoryId: number;
  categoryName: string;
}>(tix)(
  {
    variants: {},
  },
  "div",
  (styled) => (_props, ref) => {
    const [El, props] = styled(_props);
    const { navigateLink, categoryId, categoryName, ...tailProps } = props;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { tableId } = useParams();

    const targetLazyLoadRef = useRef<HTMLDivElement | null>(null);
    const productRef = useRef<HTMLDivElement>(null);

    const [isLoadingProducts, setLoadingProducts] = useState(false);
    const [productsLoaded, setProductsLoaded] = useState({
      count: 0,
      loaded: false,
    });

    const currency = useSelector((state) => state.shops.currency);
    const cartLines = useSelector(orders.selectPosOrderByState("draft")).lines;

    const posOrder = useSelector((state) => required(state.orders.posOrder));

    const _products = useSelector(
      products.selects.selectCategoryProductsById(categoryId)
    );
    const searchTerm = useSelector((state) => state.products.searchTerm);

    // Find quantity product in list
    const handleComputeProductQuantity = (productIdToFind: number) => {
      if (!cartLines) {
        return 0;
      }
      const quantityProductInCart = cartLines
        .filter((product) => product.product_id.id === productIdToFind)
        .reduce((total, product) => total + (product.qty || 0), 0);

      return quantityProductInCart;
    };

    const handleGoToDetail = (productId: number) => {
      navigate(`${navigateLink}/detail/${productId}`);
    };

    const handleAddToCart = useCallback(
      (productId: number, quantity: number) => {
        const lastIndex = cartLines.reduceRight((lastIndex, line, index) => {
          if (line.product_id.id === productId && lastIndex === -1) {
            return index;
          }
          return lastIndex;
        }, -1);

        if (lastIndex > -1) {
          const line: orders.IUpdateOrderLinePayload = {
            table_id: parseInt(tableId!),
            lines: [
              {
                product_id: productId,
                qty: quantity,
                state: "draft",
                line_id: cartLines[lastIndex]!.id,
              },
            ],
          };
          dispatch(orders.actions.doUpdateOrderLine(line));
        } else {
          const line: orders.IUpdateOrderLinePayload = {
            table_id: parseInt(tableId!),
            lines: [
              {
                product_id: productId,
                qty: quantity,
                state: "draft",
                order_id: posOrder.id,
              },
            ],
          };
          dispatch(orders.actions.doUpdateOrderLine(line));
        }
      },
      [cartLines]
    );

    const debounceHandleAddToCart = debounce(handleAddToCart, 400);

    // Get id on viewport and fetch data product
    const handleLoadProducts = useCallback(
      (entries: IntersectionObserverEntry[]) => {
        if (entries.length && entries[0]?.isIntersecting) {
          setLoadingProducts(true);

          const limit = 10;

          dispatch(
            products.actions.doGetAllProducts({
              listCategoryId: [categoryId],
              limit: limit,
              offset: productsLoaded.count,
            })
          )
            .unwrap()
            .then((newProducts) => {
              if (newProducts.length < limit) {
                setProductsLoaded((previous) => ({
                  ...previous,
                  loaded: true,
                }));
              } else {
                setProductsLoaded((previous) => ({
                  ...previous,
                  count: previous.count + newProducts.length,
                }));
              }
              setLoadingProducts(false);
            });
        }
      },
      [productsLoaded]
    );

    const debouncedHandleLoadProducts = debounce(handleLoadProducts, 400);

    // Create IntersectionObserver to get viewport
    const lazyLoadProductsObserver = useMemo(
      () =>
        new IntersectionObserver(
          (entries) => {
            debouncedHandleLoadProducts(entries);
          },
          {
            root: document.getElementById("product"),
            threshold: 1,
            rootMargin: "0px 0px -5px 0px",
          }
        ),
      [productsLoaded]
    );

    useEffect(() => {
      // Reset productsLoaded khi searchTerm thay đổi
      setProductsLoaded({ count: 0, loaded: false });
    }, [searchTerm]);

    // Listen targetLazyLoadRef
    useEffect(() => {
      if (targetLazyLoadRef.current) {
        lazyLoadProductsObserver.observe(targetLazyLoadRef.current);
      }
      return () => {
        lazyLoadProductsObserver.disconnect();
      };
    }, [lazyLoadProductsObserver]);

    // Create memo for list Prodcuct of category fto optimization, only re-render products changed
    const MemProducts = useMemo(() => {
      return _products.map((p, i) => {
        const hasBorder = i !== _products.length - 1;

        return (
          <CardProduct
            key={i}
            title={p.name}
            price={p.price_incl_tax!}
            image={p.image_url!}
            description={p.description_sale || ""}
            currency={currency?.name || "VND"}
            hasBorder={hasBorder}
            quantity={handleComputeProductQuantity(p.id)}
            onAddToCart={(quantity: number) => {
              if (p.option_product_ids.length > 0) {
                handleGoToDetail(p.id);
              } else {
                debounceHandleAddToCart(p.id, quantity);
              }
            }}
            onClick={() => handleGoToDetail(p.id)}
          ></CardProduct>
        );
      });
    }, [_products, cartLines]);

    const isShowSpinner = isLoadingProducts && !productsLoaded.loaded;

    useEffect(() => {
      if (productRef && productRef.current) {
        const height = productRef.current.scrollHeight;
        productRef.current.style.maxHeight = `${height}px`;
      }
    }, [isShowSpinner]);

    return (
      <El ref={ref} {...tailProps}>
        {searchTerm && _products.length == 0 && productsLoaded.loaded ? (
          <div></div>
        ) : (
          <>
            <Head className="px-4 pb-2" sz="medium15">
              {categoryName}
            </Head>

            {/* Products List */}
            <div>
              <Card radius="lg" className="p-4 space-y-4 shadow-none">
                <div
                  ref={productRef}
                  className="space-y-4"
                  style={{
                    transition: "max-height 0.75s ease-in-out",
                    overflow: "hidden",
                  }}
                >
                  {MemProducts}
                </div>

                {/* Lazyload target point */}
                {!productsLoaded.loaded && (
                  <div
                    id={`${categoryId}`}
                    ref={targetLazyLoadRef}
                    className="h-[1px]"
                  ></div>
                )}
              </Card>
            </div>
          </>
        )}
      </El>
    );
  }
);
