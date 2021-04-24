import Axios from 'axios'
import {BASE_URL} from '../../Utils/Constants/settingSystem'
/**
    Ngày:16/04
    Người: Nguyễn Như Hoàng Tân
    Lý do: Lấy danh sách phim từ API    
 */

export function DataDanhSachPhim (){
    return Axios({
        method:'GET',
        url:`${BASE_URL}/api/QuanLyPhim/LayDanhSachPhim`
    })
}

// export function LayThongTinPhimBangTenPhim (tenPhim){
//     const arr ={}
// }


export function LayThongTinPhimBangMaPhim (maPhim){ // lich chieu, thong tin phim
    return Axios({
        method:'GET',
        url:`${BASE_URL}api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`
    })
}

