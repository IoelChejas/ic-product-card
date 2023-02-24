# ic-product-crad

Paquete de prueba de despliegue de npm

### Ioel Chejas

## Ejemplo

``` typescript
import { ProductCard } from 'ic-product-card'
```

``` tsx
    <ProductCard
        product={product}
        initialValues={{
            count: 5,
            maxCount: 10
        }}
    >
        {
            ({ reset, count, isMaxCountReached, maxCount, increaseBy }) => {
            return (
                <>
                    <ProductCard.Image />
                    <ProductCard.Title />
                    <ProductCard.Buttons />
                </>
            )
            }
        }
    </ProductCard>
```