export default {
    name:'education',
    title:'Education',
    type: 'document',
    fields:[
        { 
            name:'degree',
            title:'Degree',
            type: 'string'
        },
        {
            name:'school',
            title:'School',
            type:'string'
        },
        {
            name:'imgurl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },  
        {
            name:'graduation',
            title:'Graduation',
            type: 'string'

        },
        {
            name:'major',
            title:'Major',
            type: 'string'

        },
        {
            name:'minor',
            title:'Minor',
            type: 'string'

        },
        {
            name:"related_course",
            title:"Related Course",
            type:"array",
            of: [
                {
                    name:"name",
                    title:"Name",
                    type:"string"
                }
            ]

        }
    ]
}