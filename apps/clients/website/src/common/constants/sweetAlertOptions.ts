import { SweetAlertOptions } from 'sweetalert2';

export const confirmSwalOption: SweetAlertOptions = {
  title: 'Bạn có chắc chắn muốn xóa?',
  text: 'Vui lòng kiểm tra kỹ trước khi xóa!',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#007dc3',
  cancelButtonColor: '#d32f2f',
  confirmButtonText: 'Yes!',
};

export const successSwalOption: SweetAlertOptions = {
  title: 'Hoàn tất!',
  text: 'Dữ liệu đã xoá thành công!',
  icon: 'success',
  confirmButtonColor: '#007dc3',
  confirmButtonText: 'OK',
};
