export const HeaderNavigations = () => {

    const names = ['Products', 'Services', 'Overview', 'Support', 'Shop', 'Contact']

    return <>
        {names.map((name) => <div style={{ display: 'flex', flexDirection: 'column', marginTop: '100px' }}>
            <div key={name} className='nav-options'>{name}</div>
            <div className='options-nav'>
                <a>Option 1</a>
                <a>Option 2</a>
                <a>Option 3</a>
                <a>Option 4</a>
            </div>
        </div>)}
    </>
}