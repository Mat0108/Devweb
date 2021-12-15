import React from 'react';

const Home = () => {
    return (
        <div className="Container" >
            <h1 className="Pstitre">Bienvenue sur le site</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="card col-4 Hcard cardcolor ">
                            <div className="card-body  ">
                                <h5 className="card-title Hlabel">Cadeaux de noel</h5>
                                <img src="https://www.enfantsprecoces.info/wp-content/uploads/2011/12/cadeau-noel.jpeg" alt="image" class="Psimage "></img>
                            </div>
                    </div>
                    <div className="card col-4 Hcard cardcolor">
                            <div className="card-body  ">
                                <h5 className="card-title Hlabel">Meilleur vente</h5>
                                <img src="https://t3.ftcdn.net/jpg/00/33/11/94/360_F_33119459_mNHYent91QVvA9yYEQ5xiQlmOPcS1I3e.jpg" alt="image" class="Psimage "></img>
                            </div>
                    </div>
                    <div className="card col-4 Hcard cardcolor">
                            <div className="card-body  ">
                                <h5 className="card-title Hlabel">Produits fabriquer en France</h5>
                                <img src="https://cdn.shopify.com/s/files/1/0101/9206/0471/files/made-in-france_480x480.png?v=1627069691" alt="image" class="Psimage "></img>
                            </div>
                    </div>
                
                 
            </div>
        </div>
    )
}
export default Home;