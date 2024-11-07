import styles from "@/app/ui/dashpoard//products/products.module.css";
import Pagination from "@/app/ui/dashpoard/pagination/Pagination";
import Link from "next/link";
import Image from "next/image";
import Search from "@/app/ui/dashpoard/search/Search";
const ProductsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashpoard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/noproduct.jpg"
                  alt="avatar"
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                iphone
              </div>
            </td>
            <td>this is mopile phone</td>
            <td>123$</td>
            <td>oct 29 2023</td>
            <td>34</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashpoard/products/test">
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default ProductsPage;
