import React from "react";
import { toast } from "react-toastify";
import axios from "axios";
const DeleteModal = ({ id, refetch }) => {
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/product/${id}`).then((res) => {
      toast.success("Delete complete");
      refetch();
    });
  };
  return (
    <div>
      <input type="checkbox" id="product_delete" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-xl text-red-500">Are you sure ?</h3>

          <div className="modal-action ">
            <label
              htmlFor="product_delete"
              className="btn  btn-sm"
              onClick={() => handleDelete(id)}
            >
              Ok
            </label>
            <label htmlFor="product_delete" className="btn btn-error btn-sm">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
