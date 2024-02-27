{action === "Sign Up" && ( // Conditionally render password confirmation field
                    <div className='input'>
                        <img src={password_icon} alt="/" />
                        <input type="password" placeholder='Confirm Password' onChange={(e) => setPasswordConfirm(e.target.value)} />
                    </div>
                )}

                const [passwordConfirm, setPasswordConfirm] = useState(""); // Added state for password confirmation
