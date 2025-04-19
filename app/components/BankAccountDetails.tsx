'use client'

import { useState } from 'react'
import { Copy as CopyIcon, Check as CheckIcon } from 'lucide-react'

export function BankAccountDetails() {
  const accountNumber = 'ES74 0182 1294 1002 0293 0217'
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(accountNumber)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-gray-50 rounded-lg shadow-md p-4 md:p-6 mb-10 mx-4" data-aos="zoom-in">
      <h3 className="text-xl mb-4 font-medium">Detalles de la cuenta bancaria</h3>

      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
        {/* Bloque con el número de cuenta */}
        <div className="font-mono text-sm md:text-lg p-3 bg-white rounded select-all break-all">
          {accountNumber}
        </div>

        <button
          onClick={copyToClipboard}
          className="hidden md:inline-flex flex-shrink-0 items-center justify-center p-2 border border-gray-300 rounded hover:bg-gray-100 transition"
          aria-label="Copiar número de cuenta"
        >
          {copied
            ? <CheckIcon className="h-5 w-5 text-green-500" />
            : <CopyIcon className="h-5 w-5 text-gray-600" />
          }
        </button>
      </div>

      <p className="text-sm text-gray-600">
        Titulares: Elena Valle Carazo o Adrian Pizarro Serrano
      </p>
    </div>
  )
}
