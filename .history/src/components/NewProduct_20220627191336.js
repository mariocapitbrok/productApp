const NewProduct = () => {
  return (
    <div className="new-product">
      <form onSubmit="addProduct">
        <input type="text" name="name" />
        <input type="text" name="description" />
        <input type="number" name="price" />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default NewProduct
