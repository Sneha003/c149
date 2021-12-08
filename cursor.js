AFRAME.registerComponent("cursor-event", {
  schema: {
    selectId: { type: "string", default: "" },
  },
  init: function () {
    this.handleMouseEnter();
    this.handleMouseLeave();
    this.handleEventClick();
  },

  handleEventClick:function(){
    this.el.addEventListener("click",()=>{
      const placecontainer=document.querySelector("#places-contaier")
      const {state}=placecontainer.getAttribute("tour")
      if (state === "playlists"){
        const id=this.el.getAttribute("id")
        const placesId=["taj-mahal", "budapest"]

        if(placesId.includes(id)){
          placecontainer.setAttribute("tour",{
            state:"view",
            selectIdCard:id

          })
        }
        


      }

    })
    
    
    },

        
      

  handlePlacesState: function () {
    const id = this.el.getAttribute("id");
    const placesId=["taj-mahal", "budapest"]
    
    if (placesId.includes(id)) {
      const container = document.querySelector("#places-contaier");
      console.log(container)
      container.setAttribute("cursor-event", {
        selectId: id,
      });

      this.el.setAttribute("material", { color: "green", opacity: 1 });
    }
  },

  handleMouseEnter: function () {
    this.el.addEventListener("mouseenter", () => {
      this.handlePlacesState();
    });
  },

  handleMouseLeave: function () {
    this.el.addEventListener("mouseleave", () => {
      const el = document.querySelector(`#${this.data.selectId}`);
      const Id = el.getAttribute("id");
      if (Id == this.data.selectId) {
        el.setAttribute("material", {
          color: "black",
          opacity: 1,
        });
      }
    });
  },
});
