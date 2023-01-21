import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'featured',
    title: 'Featured Menu categories',
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
            name: 'restaurants',
            title: 'Restaurants',
            type: 'array',
            of: [{
                type: 'reference', to: [{ type: 'restaurant' }]
            }]
        }),
    ]
})
