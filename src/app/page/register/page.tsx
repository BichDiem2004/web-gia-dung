"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate cơ bản
    if (!email || !password) {
      setError("Vui lòng nhập đầy đủ Email và Mật khẩu.");
      return;
    }
    // Đăng ký thành công (ở đây bạn có thể call API, mình chỉ redirect luôn)
    setError("");
    router.push("/page/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-[370px] border-2 border-blue-300 relative">
        {/* Close icon */}
        <Link href={'/'} className="absolute top-4 right-4 cursor-pointer">        
          <img src="/Images/close.png" alt="Đóng" className="w-4 h-4" />
        </Link>

        {/* Tiêu đề */}
        <div className="mb-2 text-center text-2xl font-semibold text-black">Đăng ký</div>
        <div className="mb-6 text-center text-gray-500">Chào mừng bạn quay trở lại!</div>
        
        <form onSubmit={handleRegister}>
        {/* Email input */}
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
              autoComplete="new-password"
            />
            <img src="/Images/eye.png" alt="show/hide" className="w-4 h-4" />
          </div>
        </div>

        {/* Hiện lỗi nếu có */}
        {error && (
          <div className="mb-3 text-red-500 text-sm text-center">{error}</div>
        )}

        {/* Đường link nhỏ */}
        <div className="flex justify-between mt-2 mb-4 text-xs">
          <div className="text-blue-600 cursor-pointer">Đăng nhập với SMS</div>
          <div className="text-blue-600 cursor-pointer">Quên mật khẩu?</div>
        </div>

        {/* Nút đăng ký */}
        <div className="mb-4">
          <button
            type="submit"
            className="w-full rounded-lg bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 text-center font-semibold cursor-pointer"
          >
            Đăng ký
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

        {/* Đăng nhập ngay */}
        <div className="text-center text-sm text-gray-500 flex justify-center items-center">
          <div>Đã có tài khoản?</div>
          <Link href="/page/login" className="text-blue-600 ml-1 cursor-pointer">Đăng nhập ngay</Link>
        </div>
      </div>
    </div>
  )
}

export default Register;
