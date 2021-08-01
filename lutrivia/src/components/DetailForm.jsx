import React from 'react'

const DetailForm = ({ handleNameInput, name, handleSubmit }) => (
    <form onSubmit={handleSubmit}>
        <input name='username' type='text' onChange={handleNameInput} value={name} />
        <input name='submit' type='submit' />
    </form>
)

export default DetailForm