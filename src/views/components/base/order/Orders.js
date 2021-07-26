import React, { useEffect, useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CPagination,
  CPaginationItem,
  CAvatar,
} from '@coreui/react'
import { DocsCallout } from 'src/reusable'
import CIcon from '@coreui/icons-react'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'

const Tables = () => {
  const token = localStorage.getItem('token')
  const [allOrder, setOrder] = useState([])
  const [pagenation, setPags] = useState({ current_page: 1, pages: undefined, loading: true })

  // const setPag = (object) => setPags((prevPagenation) => ({ ...prevPagenation, ...object }))

  useEffect(async () => {
    setPags({ ...pagenation, loading: true })
    const res = await axios.post(
      `http://fresh-app.com/api/admin/get_orders?page=${pagenation.current_page}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    )
    const orders = res.data.data.data
    setOrder(orders)
    setPags({
      current_page: res.data.data.current_page,
      pages: res.data.data.last_page,

      loading: false,
    })
  }, [pagenation.current_page])

  return (
    <CRow>
      <CCol xs={12}>
        <DocsCallout name="Table" href="components/table" />
      </CCol>

      <CCol xs={12}>
        <CCard className="mb-4" style={{ direction: 'rtl' }}>
          <CCardHeader>
            <strong>المستخدمين</strong> <small>للخدمة</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              الجدول يتم عرض فيه جميع المستخدمين الذين تم توصيلهم من قبل السائقين
            </p>

            <CTable hover responsive align="middle" className="mb-0 border">
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell scope="col">الاسم</CTableHeaderCell>
                  <CTableHeaderCell scope="col">الايميل</CTableHeaderCell>
                  <CTableHeaderCell scope="col">الرقم</CTableHeaderCell>
                  <CTableHeaderCell scope="col">المدينة</CTableHeaderCell>
                  <CTableHeaderCell scope="col">العمر</CTableHeaderCell>
                  <CTableHeaderCell scope="col">السيارة</CTableHeaderCell>
                  <CTableHeaderCell scope="col">النوع</CTableHeaderCell>
                  <CTableHeaderCell scope="col">الكمية</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {pagenation.loading
                  ? Array.from(new Array(10).keys()).map((index) => (
                      <tr key={index}>
                        <td colSpan="10" style={{ width: '100%' }}>
                          <Skeleton style={{ width: '100%', height: '1rem' }} />
                        </td>
                      </tr>
                    ))
                  : allOrder.map((item) => (
                      <CTableRow key={item.id}>
                        <CTableHeaderCell scope="colmn">{item.user_id}</CTableHeaderCell>
                        <CTableDataCell>{item.driver_id}</CTableDataCell>
                        <CTableDataCell>{item.from_address}</CTableDataCell>
                        <CTableDataCell>{item.to_address}</CTableDataCell>
                        <CTableDataCell>{item.order_distance}</CTableDataCell>
                        <CTableDataCell>{item.status}</CTableDataCell>
                        <CTableDataCell>{item.payment_type}</CTableDataCell>
                        <CTableDataCell>{item.order_cost}</CTableDataCell>
                        <CTableDataCell>{item.notes}</CTableDataCell>
                      </CTableRow>
                    ))}
              </CTableBody>
            </CTable>
          </CCardBody>
          <CPagination aria-label="Page navigation example">
            <CPaginationItem
              aria-label="Previous"
              disabled={pagenation.current_page === 1}
              onClick={() => setPags({ ...pagenation, current_page: pagenation.current_page - 1 })}
            >
              <span aria-hidden="true">&laquo;</span>
            </CPaginationItem>
            {Array.from(new Array(pagenation.pages).keys()).map((index) => (
              <CPaginationItem
                active={index + 1 === pagenation.current_page}
                onClick={() => setPags({ ...pagenation, current_page: index + 1 })}
                key={index}
              >
                {index + 1}
              </CPaginationItem>
            ))}

            <CPaginationItem
              aria-label="Next"
              disabled={pagenation.pages === pagenation.current_page}
              onClick={() => setPags({ ...pagenation, current_page: pagenation.current_page + 1 })}
            >
              <span aria-hidden="true">&raquo;</span>
            </CPaginationItem>
          </CPagination>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Tables
