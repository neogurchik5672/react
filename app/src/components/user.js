
function User ({name,age,furstname}) {
// console.log(props)
// let [name,age,furstname] = props
return(
    <div className="name" key={name}>
        <p>
            {name}
        </p>
        <p>
            {age}
        </p>
        <p>
            {furstname}
        </p>
    </div>
)
}
export default User