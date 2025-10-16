import Modal from "../../ui/Modal";
import AddProductForm from "./AddProductForm";
import { HiPlus, HiUserAdd } from "react-icons/hi";
function AddProduct() {
  return (
    <Modal>
      <Modal.Open opens="addProduct">
        <button className="flex items-center bg-purple-800 text-white py-1 px-2 rounded-2xl gap-1 cursor-pointer hover:bg-purple-700 ">
          <span>
            <HiPlus />
          </span>
          <span>Add</span>{" "}
        </button>
      </Modal.Open>
      <Modal.Window name="addProduct">
        <AddProductForm />
      </Modal.Window>
    </Modal>
  );
}

export default AddProduct;
