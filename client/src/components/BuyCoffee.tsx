import BuyMeACoffeeButton from "./atoms/BuyMeACoffeeButton"
import BuyMeACoffeeWidget from "./atoms/BuyMeACoffeeWidget"

export const BuyCoffee = () => {
    return (
        <div className="App">
        <h1>Buy Me a Coffee Demo</h1>
        <BuyMeACoffeeButton />
        <BuyMeACoffeeWidget />
      </div>
    )
}