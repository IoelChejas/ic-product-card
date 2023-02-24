import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard } from '../.';

const product = {
  id: "1",
  title: "Coffee mug -Card",
  //img: './coffee-mug.png'
}

const App = () => {
  return (
    <>
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
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
