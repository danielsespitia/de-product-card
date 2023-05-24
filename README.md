# DE-Product-Card

Es un paquete de pruebas de despliegue en NPM

### Daniel Espitia

## Ejemplo
```
import {ProductCard, ProductImage, ProductTitle, ProductButtons } from 'do-product-card'
```
```
<>
      <ProductCard
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ reset, increaseBy, count, isMaxCountReached, maxCount }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </>
```