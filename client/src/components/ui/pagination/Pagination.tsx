import styles from "./Pagination.module.scss"
import ReactPaginate from "react-paginate"
import Icons from "@components/ui/icons"

type PaginationProps = {
  onPageChange: (selectedItem: { selected: number }) => void
  pageCount: number
}

export const Pagination = ({ onPageChange, pageCount }: PaginationProps) => {
  return (
    <ReactPaginate
      onPageChange={onPageChange}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      renderOnZeroPageCount={null}
      breakLabel="..."
      previousLabel={
        <div style={{ transform: "rotate(90deg)" }}>
          <Icons name={"arrow-down-simple"} size={24} />
        </div>
      }
      nextLabel={
        <div style={{ transform: "rotate(-90deg)" }}>
          <Icons name={"arrow-down-simple"} size={24} />
        </div>
      }
      className={styles.pagination}
      pageLinkClassName={"textBody " + styles.paginationPageLink}
      activeLinkClassName={styles.paginationActiveLink}

      nextClassName={styles.paginationArrow}
      previousClassName={styles.paginationArrow}
    />
  )
}