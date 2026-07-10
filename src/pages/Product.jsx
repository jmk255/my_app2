import useForm from "../hooks/useForm"

function Product() {
  const initValue = {title: "", price: NaN, category: ""}
  //value = product, onChangeHandler = handler, initValue를 초기값으로 전달
  const [product, handler] = useForm(initValue)

  return (
    <div id="box">
      <h1>입력폼</h1>
      <div className="control">
        <input type="text" placeholder="제품명"
          onChange={handler}
          value={product.title}
          name="title"
        />
      </div>
      <div className="control">
        <input type="number" placeholder="가격" min="0" step="100"
          onChange={handler}
          value={product.price}
          name="price"
        />
      </div>
      <select onChange={handler} value={product.category} name="category">
        <option value="">제품 유형을 선택하세요</option>
        <option>음료</option>
        <option>과자</option>
        <option>빵</option>
      </select>

      <hr />
      <h1>입력된 값</h1>
      <div className="control">제품명 : {product.title}</div>
      <div className="control">가격 : {product.price}</div>
      <div className="control">제품유형 : {product.category}</div>
    </div>
  )
}

export default Product