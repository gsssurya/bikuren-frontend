function scrollToElError(objectError) {
    const checkOrder = ['name', 'email', 'phone', 'country', 'passport', 'room_number', 'address', 'password'];
    
    let elSelected = '';

    for (const fieldName of checkOrder) {
      if (objectError[fieldName]) {
        elSelected = fieldName;
        break;
      }
    }

    if (elSelected) {
      const element = document.querySelector(`[name="${elSelected}"]`);
      
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
        
        setTimeout(() => element.focus(), 200);
      }
    }
}

export default scrollToElError;