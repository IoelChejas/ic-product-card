import { useEffect, useRef, useState } from "react"
import { OnChangeProductCountArgs, Product, ProductCardInitialValues } from '../interfaces/product.interface';

interface useProductArgs {
    initialValues?: ProductCardInitialValues;
    product: Product;
    value?: number;
    onChange?: (args: OnChangeProductCountArgs) => void;
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {

    const [counter, setCounter] = useState<number>(initialValues?.count || value)

    const isControlled = useRef(!!onChange)

    const isMounted = useRef(false);

    const increaseBy = (value: number) => {
        if (isControlled.current) {
            return onChange!({ count: value, product });
        }
        let newValue = Math.max(counter + value, 0);
        if (initialValues?.maxCount) {
            newValue = Math.min(newValue, initialValues.maxCount)
        }
        setCounter(newValue)
        onChange && onChange({ product, count: newValue })
    }

    const reset = () => {
        setCounter(initialValues?.count || value)
    }

    useEffect(() => {
        if (!isMounted.current) return;
        setCounter(value)
    }, [value])

    useEffect(() => {
        isMounted.current = true;
    })

    return {
        counter,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,
        increaseBy,
        reset
    }
}