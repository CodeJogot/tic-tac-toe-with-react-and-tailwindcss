
export default function Square({value, onSquareClick}) {
  return (
    <>
        <button onClick={onSquareClick} className="bg-white border border-gray-400 w-12 h-12 m-1 leading-1 text-lg">{value}</button>
    </>
  )
}
