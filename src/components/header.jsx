import Nav from './nav'
import './header.css'

export default function Header({currentPage, handlePageChange}){
    return (
        <header>
            <h1>What the Fork?!</h1>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
    )
}