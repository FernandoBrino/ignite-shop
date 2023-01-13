import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";


export default function Product() {
    const { query } = useRouter();

    return (
       <ProductContainer>
            <ImageContainer>

            </ImageContainer>

            <ProductDetails>
                <h1>Camiseta X</h1>
                <span>R$ 79,00</span>

                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Corporis dignissimos explicabo, magnam recusandae ducimus fugiat, 
                    nesciunt possimus ipsum officia veritatis consectetur culpa quaerat tenetur? 
                    Nisi cupiditate at maxime debitis perferendis!
                </p>

                <button>
                    Comprar agora
                </button>
            </ProductDetails>
       </ProductContainer> 
    )
}