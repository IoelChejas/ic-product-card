import { useProduct } from '../hooks/useProduct'
import { OnChangeProductCountArgs, Product, ProductCardHandlers, ProductContextProps } from '../interfaces/product.interface'

import styles from '../styles/styles.module.css'
import React, { createContext, ReactElement } from 'react';

import { ProductCardInitialValues } from '../interfaces/product.interface'

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[] | ((args: ProductCardHandlers) => JSX.Element);
    className?: string;
    style?: React.CSSProperties;
    onChange?: (args: OnChangeProductCountArgs) => void;
    value?: number;
    initialValues?: ProductCardInitialValues
}

export const ProductCard = ({ product, children, className, style, onChange, value, initialValues }: ProductCardProps) => {
    const { counter, increaseBy, reset, maxCount, isMaxCountReached } = useProduct({ product, onChange, value, initialValues })

    return (
        <Provider value={{
            counter,
            product,
            increaseBy,
            maxCount
        }}>
            <div
                className={`${styles.productCard} ${className}`}
                style={style}
            >
                {(children && typeof children === 'function') ?
                    children({
                        count: counter,
                        isMaxCountReached,
                        maxCount: initialValues?.maxCount,
                        product,
                        increaseBy,
                        reset
                    })
                    : children}
            </div>
        </Provider>
    )
}

