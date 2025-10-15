function TableHeader() {
  return (
        <div className="hidden md:block">
        
    
        <div className="grid grid-cols-6 gap-4 border-b pb-2 mb-2 font-semibold text-gray-500 text-sm">
          <div>Image</div>
          <div>Product Name</div>
          <div>Price</div>
          <div>Description</div>
          <div>Status</div>
          <div className="text-right pr-6">Actions</div>
        </div>
        
       </div>
  )
}

export default TableHeader;