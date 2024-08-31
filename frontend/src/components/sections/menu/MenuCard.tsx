
interface MenuCardProps {
    itemNum: number
    burgerSrc: string
    price: number
    title: string
    handler: (itemNum: number) => void
}
export const MenuCard = ({itemNum, burgerSrc, price, title, handler}: MenuCardProps) => {
  return (
    <div className="menuCard">
        <div>Item {itemNum}</div>
        <main>
            <img src={burgerSrc} alt={itemNum.toString()} />

            <h5>₹{price}</h5>

            <p>{title}</p>

            <button onClick={() => handler(itemNum)}>Buy Now</button>
        </main>
        </div>
  )
}
