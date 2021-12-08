AFRAME.registerComponent("tour",{
    
    schema:{
        state:{
            type:"string",
            default:"playlists",
            
        },

        selectIdCard:{
            type:"string",
            default:"#card1"
        }

    },
    init:function(){
        this.createMyImages()
        this.placecontainer=this.el
    },

    tick:function(){
        const {state}=this.el.getAttribute("tour")
        if(state==="view"){
            this.hide([this.placecontainer])
            this.showView()
        }
    },

    hide:function(alllist){
        alllist.map(e=>{
            e.setAttribute("visible",false)
        })
    },

    showView:function(){
        const{selectIdCard}=this.data
        const sky1=document.querySelector("#main-container")
        sky1.setAttribute("material",{
            src:`./assets/360_images/${selectIdCard}/place-0.jpg`,
            color:"white"
        })

    },

    createMyImages:function(){
        const thumbnails=[
            {
                id:"taj-mahal",
                title:"South Korea",
                url: "./assets/thumbnails/photo1.png"

            },

            {
                id:"budapest",
                title:"Paris",
                url:"./assets/thumbnails/photo2.jpg"

            },



        ]
        console.log(thumbnails)
        let previousXposition=-60
        for(var item of thumbnails){
            const posX=previousXposition+29
            const posY=-5
            const posZ=-40


            const position={x:posX, y:posY,z:posZ}
            previousXposition=posX


            const borders=this.createBorder(position,item.id)



            const images=this.createThumbnails(item)
            borders.appendChild(images)

            const titles=this.createTitle(position,item)
            borders.appendChild(titles)

            this.el.appendChild(borders)
        }

        
    },

    createThumbnails:function(item){
        const entity1=document.createElement("a-entity")
        
        entity1.setAttribute("visible",true),
        entity1.setAttribute("geometry",{
            primitive:"circle",
            radius:10

        })

        entity1.setAttribute("material",{
            src:item.url
        })
        return entity1

    },
    createBorder:function(position,id){
        const entity1=document.createElement("a-entity")
        entity1.setAttribute("id",id)
        entity1.setAttribute("position",position),
        entity1.setAttribute("visible",true),
        entity1.setAttribute("geometry",{
            primitive:"ring",
            radiusInner:9,
            radiusOuter:10

        })

        entity1.setAttribute("material",{
            color:"red",
            opacity:1

        })
        entity1.setAttribute("cursor-event",{})


        return entity1

    },

    createTitle:function(textPosition,textItem){
        const entity1=document.createElement("a-entity")
        const txtPosition=textPosition
        txtPosition.y=-40



        entity1.setAttribute("position",txtPosition),
        entity1.setAttribute("visible",true)
        entity1.setAttribute("text",{
            align:"center",
            width:60,
            color:"black",
            value:textItem.title

        })

        return entity1


    }
})