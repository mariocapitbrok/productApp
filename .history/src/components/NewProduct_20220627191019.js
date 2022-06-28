const NewProduct = () => {
  return (
    <div className="new-product">
      <form onSubmit="addProduct">
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default NewProduct
