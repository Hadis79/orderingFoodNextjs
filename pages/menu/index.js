import React from 'react'
import MenuPage from '../../components/templates/MenuPage'

const Menu = ({ data }) => {
    return <MenuPage data={data} />
}

export default Menu


export async function getStaticProps() {
    const result = await fetch('http://localhost:3001/data')
    const data = await result.json()

    return {
        props: { data },
        revalidate: 10
    }
}