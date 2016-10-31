package com.todo.backend.model.util;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.Date;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;


public final class PersistenceConverters {

    private PersistenceConverters() {
    }

    @Converter(autoApply = true)
    public static class ZonedDateTimeConverter implements AttributeConverter<ZonedDateTime, Date> {

        @Override
        public Date convertToDatabaseColumn(ZonedDateTime zonedDateTime) {
            return zonedDateTime == null ? null : Date.from(zonedDateTime.toInstant());
        }

        @Override
        public ZonedDateTime convertToEntityAttribute(Date date) {
            return date == null ? null : ZonedDateTime.ofInstant(date.toInstant(), ZoneId.of("UTC"));
        }
    }

}
