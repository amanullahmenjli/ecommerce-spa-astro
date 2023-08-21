import { z } from 'zod'

export const CartItemResult = z.object({
    id: z.string(),
    cost: z.number(),
    merchandise: z.object({
        id: z.string(),
        title: z.string(),
        product: z.object({
            title: z.string(),
            handle: z.string(),
        }),
        image: ImageResult.nullable(),
    }),
    quantity: z.number().positive().int(),
})

export const CartResult = z
    .object({
        id: z.string(),
        cost: z.object({
            subtotalAmount: MoneyV2Result,
        }),
        checkoutUrl: z.string(),
        totalQuantity: z.number().int(),
        lines: z.object({
            nodes: z.array(CartItemResult),
        }),
    })
    .nullable()

export const VariantResult = z.object({
    id: z.string(),
    title: z.string(),
    availableForSale: z.boolean(),
    quantityAvailable: z.number().int(),
    price: MoneyV2Result,
})

export const ProductResult = z
    .object({
        id: z.string(),
        title: z.string(),
        handle: z.string(),
        images: z.object({
            nodes: z.array(ImageResult),
        }),
        variants: z.object({
            nodes: z.array(VariantResult),
        }),
        featuredImage: ImageResult.nullable(),
    })
    .nullable()
