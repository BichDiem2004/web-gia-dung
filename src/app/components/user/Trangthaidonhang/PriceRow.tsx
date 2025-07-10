import * as React from "react";
import { FiInfo } from "react-icons/fi";

interface PriceRowProps {
  label: string;
  amount: string;
  hasIcon?: boolean;
  isTotal?: boolean;
}

export const PriceRow: React.FC<PriceRowProps> = ({ label, amount, hasIcon = false, isTotal = false }) => {
  return (
    <div className={`flex ${isTotal ? 'gap-5' : 'gap-10'} items-center ${isTotal ? 'mt-4' : 'mt-4'} w-full ${isTotal ? '' : 'leading-6'}`}>
      <div className={`flex gap-2 items-center self-stretch my-auto w-40 ${isTotal ? 'leading-6' : ''} text-zinc-500`}>
        <span className="self-stretch my-auto text-zinc-500">
          {label}
        </span>
        {hasIcon && (
          <FiInfo className="w-[15px] h-[15px] text-gray-500" />
        )}
      </div>
      <div className={`ml-auto text-right ${isTotal ? 'w-[120px]' : 'w-[120px]'}`}>
        {isTotal ? (
          <span className="self-stretch my-auto">
            <span style={{fontWeight: 500, fontSize: '18px', lineHeight: '22px', color: 'rgba(255,66,79,1)'}}>
              {amount.split(' ')[0]}
            </span>
            <span style={{fontWeight: 500, textDecoration: 'underline', fontSize: '18px', lineHeight: '22px', color: 'rgba(255,66,79,1)'}}>
              {' ' + amount.split(' ')[1]}
            </span>
          </span>
        ) : (
          <span className="self-stretch my-auto text-zinc-800">
            {amount.includes('-') ? (
              <>
                {amount.split(' ')[0]}{' '}
                <span style={{textDecoration: 'underline', color: amount.includes('-60.000') ? 'rgba(60,60,60,1)' : 'rgba(39,39,42,1)'}}>
                  {amount.split(' ')[1]}
                </span>
              </>
            ) : (
              <>
                {amount.split(' ')[0]}{' '}
                <span style={{textDecoration: 'underline'}}>
                  {amount.split(' ')[1]}
                </span>
              </>
            )}
          </span>
        )}
      </div>
    </div>
  );
};
