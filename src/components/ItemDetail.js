import Disponible from "./Disponible.js"

const ItemDetail = ({item,onAdd,state}) => {
    return (<>
      
        <div className="container">

            <div className="row">
                <div className="col-12">
                    <h1 className="page-header">{item.title}</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 mb-4">
                    
                    <div className="">
                    <div className="main-product-image space">
                        <div id="product-carousel" className="carousel slide">
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                            <img id="first-image" src={item.imageUrl}  alt="Wacom Bamboo Tablet" className="img-fluid"></img>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div> 
                </div>

                <div className="col-lg-6">
                    <Disponible disp="true" item={item} onAdd={onAdd} max={item.id} state={state}/>          
                    <div className="form-group row">
                    <label className="col-sm-3 col-md-3 form-control-label">Description:</label>
                    <div className="col-sm-8 col-md-9 description">
                        <p>{item.description}</p>
                    </div>
                    </div>
                </div>
            </div>
</div>
</>
    )
}

export default ItemDetail
