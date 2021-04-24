import Axios from "axios";
import {BASE_URL} from '../../../Utils/Constants/settingSystem'


export function DataDanhSachRap(){
    return Axios({
        method:"GET",
        url: `${BASE_URL}/api/QuanLyRap/LayThongTinHeThongRap`
    })
}



