export default {
    name:'resume',
    title:'Resume',
    type:'document',
    fields:[

        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name:'resume',
            title:'Resume',
            type:'file'
        },
        {
            name:'desc',
            title:'Desc',
            type:'string'
        }
    ]
}