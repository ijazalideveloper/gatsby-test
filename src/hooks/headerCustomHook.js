import { useState, useEffect } from "react"

export const UseHeaderHook = () => {
  const [openSheet, setOpenSheet] = useState(false)
  const onClickHideShowSheet = () => {
    setOpenSheet(!openSheet)
  }
  useEffect(() => {
    if (openSheet) {
      // const overlayElement = document.getElementById("overLay") as HTMLInputElement;
      // overlayElement.classList.add("overlay-open");
      document.documentElement.classList.add("lockBody")
    }
    return () => {
      // const overlayElement = document.getElementById("overLay") as HTMLInputElement;
      // overlayElement.classList.remove("overlay-open");
      document.documentElement.classList.remove("lockBody")
    }
  }, [openSheet])

  return {
    openSheet,
    setOpenSheet,
    onClickHideShowSheet
  }
}
