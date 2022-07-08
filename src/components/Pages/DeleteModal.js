import React from "react";

const DeleteModal = () => {
  return (
    <div>
      <input type="checkbox" id="product_delete" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-xl text-red-500">Are you sure ?</h3>

          <div class="modal-action ">
            <label for="product_delete" class="btn  btn-sm">
              Ok
            </label>
            <label for="product_delete" class="btn btn-error btn-sm">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
