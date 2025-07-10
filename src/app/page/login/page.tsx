"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from "next/navigation";

const EMAIL_SAMPLE = "user@gmail.com";
const PASSWORD_SAMPLE = "123456";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Xử lý đăng nhập
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === EMAIL_SAMPLE && password === PASSWORD_SAMPLE) {
      setError("");
      router.push("/page/UserLogin");
    } else {
      setError("Email hoặc mật khẩu không đúng.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-[370px] border-2 border-blue-300 relative">
        {/* Close icon */}
        <Link href={'/'} className="absolute top-4 right-4 cursor-pointer">        
          <img src="/Images/close.png" alt="Đóng" className="w-4 h-4" />
        </Link>

        {/* Tiêu đề */}
        <div className="mb-2 text-center text-2xl font-semibold text-black">Đăng nhập</div>
        <div className="mb-6 text-center text-gray-500">Chào mừng bạn quay trở lại!</div>
        
        {/* Email input */}
        <form onSubmit={handleLogin}>
        <div className="mb-4">
          <div className="text-sm mb-1 text-black">Email</div>
          <div className="flex items-center border rounded-md px-3 py-2 bg-gray-100">
            <input
              className="flex-1 text-gray-700 bg-gray-100 border-none focus:outline-none focus:ring-0"
              placeholder="Nhập địa chỉ email của bạn"
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoComplete="username"
            />
            <img src="/Images/email.png" alt="mail" className="w-4 h-4" />
          </div>
        </div>

        {/* Password input */}
        <div className="mb-1">
          <div className="text-sm mb-1 text-black">Mật khẩu</div>
          <div className="flex items-center border rounded-md px-3 py-2 bg-gray-100">
            <input 
              className='flex-1 text-gray-700 bg-gray-100 border-none focus:outline-none focus:ring-0'
              placeholder='Nhập mật khẩu của bạn'
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <img src="/Images/eye.png" alt="show/hide" className="w-4 h-4" />
          </div>
        </div>

        {/* Đường link nhỏ */}
        <div className="flex justify-between mt-2 mb-4 text-xs">
          <div className="text-blue-600 cursor-pointer">Đăng nhập với SMS</div>
          <div className="text-blue-600 cursor-pointer">Quên mật khẩu?</div>
        </div>

        {/* Hiện lỗi nếu có */}
        {error && (
          <div className="mb-3 text-red-500 text-sm text-center">{error}</div>
        )}

        {/* Nút đăng nhập */}
        <div className="mb-4">
          <button
            type="submit"
            className="w-full rounded-lg bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 text-center font-semibold cursor-pointer"
          >
            Đăng nhập
          </button>
        </div>
        </form>

        {/* Hoặc */}
        <div className="flex items-center my-2">
          <div className="flex-1 h-px bg-gray-200"></div>
          <div className="mx-2 text-xs text-gray-400">Hoặc</div>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Nút Google Facebook */}
        <div className="flex gap-4 mb-4">
          <div className="flex items-center gap-2 border rounded-lg flex-1 py-2 justify-center bg-gray-50 cursor-pointer">
            <img src="/Images/google.png" alt="Google" className="w-5 h-5" />
            <div className='text-black'>Google</div>
          </div>
          <div className="flex items-center gap-2 border rounded-lg flex-1 py-2 justify-center bg-gray-50 cursor-pointer">
            <img src="/Images/facebook.png" alt="Facebook" className="w-5 h-5" />
            <div className='text-black'>Facebook</div>
          </div>
        </div>

        {/* Đăng ký */}
        <div className="text-center text-sm text-gray-500 flex justify-center items-center">
          <div>Chưa có tài khoản?</div>
          <div className="text-blue-600 ml-1 cursor-pointer">Đăng ký ngay</div>
        </div>
      </div>
    </div>
  )
}

export default Login;
