export default({value,onChange})=><input className="search" placeholder="Search white shirts, brands, styles…" value={value} onChange={e=>onChange(e.target.value)}/>;
