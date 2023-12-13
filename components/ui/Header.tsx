import { useEffect } from "react"
import DarkModeBtn from "./DarkModeBtn"

const Header = () => {

useEffect(() => {
 
alert('xd')
  
}, [])

	return (
		<header className="py-5 px-5 flex items-center justify-end">
			<div>
				<DarkModeBtn />
			</div>
		</header>
	)
}
export default Header
