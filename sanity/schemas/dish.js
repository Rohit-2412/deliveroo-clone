import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'dish',
    title: 'Dishes',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'desc',
            title: 'Description',
            type: 'string',
            validation: (Rule) => Rule.max(200)
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'number',
            validation: (Rule) => Rule.required().min(1)
        }),
    ]
})
