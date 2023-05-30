import React, {useCallback} from 'react';

const Services = () => {
    const handleAddServices = useCallback(async ({name, category, price, description }: any) => {

    }, [])


    return (
        <div>
            Services
            <div onClick={() => handleAddServices({name: 'name', category: `CategoryName${Math.random()}`, price: 123, description: '12312312adssdasd'})}>
                asdasd
            </div>
        </div>
    );
};

export default Services;