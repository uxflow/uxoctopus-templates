<?php 
  /**
   * Input.
   */
  function input($props, $other = null) {
    /**
     * Appearances.
     */
    $type = $props->type ?? 'input';
    $size = $props->size ? 'is-' . $props->size : 'is-md';
    $error = $props->error ? 'is-error' : null;
    $rounded = $props->rounded ? 'is-rounded-' . $props->rounded : 'is-rounded-sm';
    $disabled = $props->disabled ? 'is-disabled' : null;
    $textarea = $type === 'textarea' ? 'textarea' : null;
    $appearance = $props->appearance ? 'is-' . $props->appearance : 'is-primary';

    /**
     * Format custom classes.
     */
    $class = $size . ' ' . $rounded . ' ' . $appearance . ' ' . $textarea . ' ' . $error . ' ' . $disabled . ' ' . $props->class;
    
    /**
     * Input ref.
     */
    $ref = $props->id ? 'id=' . $props->id : null;

    /**
     * Input name.
     */
    $name = $props->name ?? 'name';

    /**
     * Input props.
     */
    $blur = $appearance !== 'is-secondary' ? 'onblur=onInputBlur(this)' : null;
    $focus = $appearance !== 'is-secondary' ? 'onfocus=onInputFocus(this)' : null; 
    $disable = $props->disabled ? 'disabled=true' : null;
    $placeholder = $props->placeholder ? 'placeholder=' . $props->placeholder : null;
    ?>
      <div 
        <?php echo $ref ?>
        class="input <?php echo $class ?>"
      >
        <div class="input-wrapper">
          <label 
            for="<?php echo $name ?>" 
            class="input-label"
          >
            <?php echo $props->label ?>
          </label>

          <div class="input-main">
            <?php  
              if ($type === 'input'):
                ?>
                  <input 
                    id="<?php echo $name ?>" 
                    class="input-target" 

                    <?php 
                      echo $blur . ' ' . $focus . ' ' . $disable;

                      foreach($other as $key => $val):
                        echo ' ' . $key . '=' . $val . ' ';
                      endforeach;
                    ?>
                  />
                <?php
              endif;

              if ($type === 'textarea'):
                ?>
                  <textarea 
                    id="<?php echo $name ?>" 
                    rows="<?php echo $props->rows ?? 3 ?>"
                    class="input-target" 

                    <?php 
                      echo $blur . ' ' . $focus . ' ' . $disable;

                      foreach($other as $key => $val):
                        echo ' ' . $key . '=' . $val . ' ';
                      endforeach;
                    ?>
                  ></textarea>
                <?php
              endif;
            ?>
          </div>
        </div>

        <?php
          if ($props->error):
            echo '<span class="input-error">' . $props->error . '</span>';
          endif;
        ?>
      </div>
    <?php
  }
?>
