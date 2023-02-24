import React from 'react'
import renderer from 'react-test-renderer'
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products'

describe('iProductTitle', () => {

    test('should show component with title', () => {

        const wrapper = renderer.create(
            <ProductTitle title="Custom Product" />
        )

        expect(wrapper.toJSON()).toMatchSnapshot();

    });

    test('should show component with product name', () => {

        const wrapper = renderer.create(
            <ProductCard product={product1} >
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();

    });

});
