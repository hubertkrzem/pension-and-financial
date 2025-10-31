import { defineField, defineType } from 'sanity'

export const employeeCardType = defineType({
    name: 'employeeCard',
    type: 'object',
    title: 'Employee Card',
    fields: [
    {
        name: 'headshot',
        type: 'image',
        title: 'Employee Headshot',
    },
    {
        name: 'name',
        type: 'string',
        title: 'Employee Name',
    },
    {
        name: 'role',
        type: 'string',
        title: 'Employee Role',
    },
    defineField({
        name: 'bio',
        type: 'array',
        title: 'Employee Bio',
        of: [
            {
            type: 'block',
            },
        ],
    }),
    defineField({
        name: 'qualifications',
        type: 'array',
        title: 'Qualification Bubbles',
        of: [
            {
            type: 'string',
            },
        ],
    }),
    ]
})