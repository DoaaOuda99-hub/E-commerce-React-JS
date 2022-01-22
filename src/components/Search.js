import React from 'react'

export default function Search() {
    return (
        <form className="ps-search--header" action="do_action" method="post">
          <input className="form-control" type="text" placeholder="Search Product…"/>
          <button><i className="ps-icon-search"></i></button>
        </form>
    )
}
