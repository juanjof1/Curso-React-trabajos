import React from 'react';
// EJEMPO DE COMPOSICION, Y PROPIEDAD CHILDREN
export const Wrapper:React.FC = ({children}) => {
	return<div>
		{children}
	</div>
}